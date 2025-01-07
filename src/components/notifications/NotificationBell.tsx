import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotificationBell() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/updates')}
      className="relative"
    >
      <Bell className="h-6 w-6 text-white" />
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
    </motion.button>
  );
}