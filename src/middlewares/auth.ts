import { Request, Response, NextFunction } from 'express';

export const Auth = {
  private: (request: Request, response: Response, next: NextFunction) => {
    // Fazer verificação de auth

    let success = true;

    if (success) {
      next();
    } else {
      response.status(403).json({ error: 'Unauthorized' });
    }
  },
};
