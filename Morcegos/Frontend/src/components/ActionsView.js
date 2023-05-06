import React from 'react';
import {
  Container,
  Box,
  Typography,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import ActivityModal from './ActivityModal.js';
import RuleModal from './RuleModal.js';

const ActionsView = () => {

  return (
    <div>
        <ActivityModal />
        <RuleModal />
    </div>
  );
};

export default ActionsView;
