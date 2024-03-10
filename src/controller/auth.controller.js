import User from '../model/admin.model.js';
import Message from "../model/message.model.js";
import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from '../config/config.js';
import jwt from 'jsonwebtoken';

//funcion para loguearse
export const login = async (req, res) => {
  try {
    // Obtener los datos del usuario
    const { username, password } = req.body;

    // Verificar si el usuario existe
    const existing = await User.findOne({ username });

    if (!existing) {
      return res.status(400).json({ message: 'El usuario no existe' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    if (password !== existing.password) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Si el usuario y la contraseña son correctos, generar un token de autenticación
    const token = await createAccessToken({id: existing._id});

    res.cookie('token', token, {
      sameSite: 'none',
      secure: true,
      httpOnly: false
    });
    res.json({
      message: existing, token
    })

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

//Funcion para salirse
export const logout = async (req, res) => {
  //Deja el token vacio
  res.cookie("token", "", {
  });
  return res.sendStatus(200);
}

export const sendMessage = async (req, res) => {
  try {
    // Obtener los datos del usuario
    const { nombres, correo, mensaje } = req.body;

    const newMessage = new Message({
      nombres,
      correo,
      mensaje
    });

    await newMessage.save();
    res.status(201).json({ message: "Mensaje enviado correctamente" });

  } catch (error) {
    console.error('Error al registrar al mandar el mensaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const profile = async (req, res) =>{
  const userFound = await User.findById(req.user.id);

  if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});
  return res.json({
    id: userFound._id,
    username: userFound.username
  })
  res.send('profile');
}

export const verifyToken = async (req, res) => {
  const {token} = req.cookies

  if (!token) return res.status(401).json({message: "No autorizado"});

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({message: "No autorizado"});

    const userFound = await User.findById(user.id)
    
    if (!userFound) return res.status(401).json({message: "No autorizado"});

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
    
  })
}