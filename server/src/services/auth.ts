import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-errors'; 
import dotenv from 'dotenv';

dotenv.config();

// Define User Payload Interface
interface UserPayload {
  email: string;
  _id: string;
}

// Authenticate Token Middleware
export const authenticateToken = ({ req }: { req: any }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ').pop()?.trim();
  }

  if (!token) return req; // No token provided, return the request object
  console.log(token);
  try {
    // Verify token and extract payload
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log(secretKey);
    if (!secretKey) throw new Error('JWT secret key is not defined');

    const { data } = jwt.verify(token, secretKey, { maxAge: '2h' }) as { data: UserPayload };
    
    return { ...req, user: data }; // Return new request object with user data
    } catch (err) {
    if (err instanceof Error) {
      console.log(process.env.JWT_SECRET_KEY);
      console.error('Invalid token:', err.message);
    } else {
      console.error('Invalid token: An unknown error occurred');
    }
    throw new AuthenticationError('Invalid token');
  }
};

// Sign JWT Token
export const signToken = (email: string, _id: string) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) throw new Error('JWT secret key is not defined');

  const payload: UserPayload = { email, _id };
  return jwt.sign({ data: payload }, secretKey, { expiresIn: '2h' });
};
