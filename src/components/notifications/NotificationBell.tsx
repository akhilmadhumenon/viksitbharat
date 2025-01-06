import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'update' | 'request' | 'policy';
  read: boolean;
}

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Fund Request',
      message: 'A new fund request has been submitted for review',
      date: '2024-03-15',
      type: 'request',
      read: false
    }
  ]);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="h-6 w-6 text-white" />
        {notifications.some(n => !n.read) && (
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-black">Notifications</h3>
              <div className="space-y-4">
                {notifications.map(notification => (
                  <Link
                    key={notification.id}
                    to="/updates"
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}