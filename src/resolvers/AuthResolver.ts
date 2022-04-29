import { Ctx, Query, Resolver } from 'type-graphql'

@Resolver()
class AuthResolver {
  @Query(() => String)
  async me() {
    return 'Hello, World!'
  }
}

export default AuthResolver