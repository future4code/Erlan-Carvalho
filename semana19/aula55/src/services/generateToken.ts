import * as jwt from "jsonwebtoken";

// letra b) do 3ª exercício 

    const expiresIn = "1min";
    function generateToken (input: AuthenticationData): string {
      const token = jwt.sign(
        {
          id: input.id,
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    }
  


type AuthenticationData = {
    id:string;
}


