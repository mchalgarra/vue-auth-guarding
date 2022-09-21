import { RoleEnum } from "../enums/role.enum"

/**
 * Entity that represents the user.
 */
export class UserEntity {
  constructor({ id, name, email, role } = {}) {
    /**
     * Property that defines the user document id.
     *
     * @type {string}
     */
    this.id = id ?? null

    /**
     * Property that defines the user name.
     *
     * @type {string}
     */
    this.name = name ?? ""

    /**
     * Property that defines the user email.
     *
     * @type {string}
     */
    this.email = email ?? ""

    /**
     * Property that defines the user role.
     *
     * @type {number}
     */
    this.role = role ?? RoleEnum.USER
  }
}
