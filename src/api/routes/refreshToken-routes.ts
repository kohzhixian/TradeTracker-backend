import express from 'express';

const router = express.Router();
import refreshTokenController from '../controllers/refreshToken-controller';

router.delete('/logout/:userId', refreshTokenController.logout);
router.get('/', refreshTokenController.getAllRefreshTokens);

export = router; 