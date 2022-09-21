import { signInWithEmailAndPassword, signOut as snOut } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, firestore } from "../api"
import { UserEntity } from "../entities/user.entity"

/**
 * Controller responsible for managing all user related requests.
 */
export class UserController {
  /**
   * Signs the user in.
   *
   * @param {string} email the user email.
   * @param {string} password the user password.
   */
  async signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  /**
   * Signs the user out.
   */
  async signOut() {
    await snOut(auth)
  }

  /**
   * Gets an user from the database.
   *
   * @param {string} id the user document id.
   */
  async getUser(id) {
    const document = await getDoc(doc(firestore, `users/${id}`))

    if (!document.exists()) {
      return null
    }

    return new UserEntity({ id: document.id, ...document.data() })
  }
}
