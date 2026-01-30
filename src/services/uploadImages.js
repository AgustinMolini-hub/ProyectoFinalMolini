import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";

/**
 * Sube una imagen a Firebase Storage y devuelve la URL pública
 * @param {File} file - Archivo de imagen seleccionado
 * @param {string} productId - ID del producto (para nombrar la imagen)
 * @returns {Promise<string|null>} - URL pública de la imagen o null si falla
 */
export const uploadImage = async (file, productId) => {
  try {
    // Creamos la referencia en Storage dentro de la carpeta "products"
    const storageRef = ref(storage, `products/${productId}-${file.name}`);

    // Subimos el archivo
    await uploadBytes(storageRef, file);

    // Obtenemos la URL pública
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    console.error("Error al subir imagen:", error);
    return null;
  }
};