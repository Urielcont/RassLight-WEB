import User from '../model/admin.model.js';
import Message from "../model/message.model.js";
import { createAccessToken } from "../libs/jwt.js";

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
    const passwordMatch = (password, existing.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Si el usuario y la contraseña son correctos, generar un token de autenticación
    const token = await createAccessToken({id: existing._id});

    res.cookie('token', token);
    res.json({
      message: "User creadp"
    })

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const logout = async (req, res) => {
  try {
    res.json({ token: '' });
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
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

export const profile = (req, res) =>{
  res.send('profile');
}