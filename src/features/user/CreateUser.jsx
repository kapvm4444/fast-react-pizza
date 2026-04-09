import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice.js';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      dispatch(updateName(username));
      navigate('/menu');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
      <div className="space-y-3">
        <p className="text-base font-medium text-stone-600">
          👋 Welcome! Please start by telling us your name:
        </p>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input w-full"
          autoFocus
        />
      </div>

      {username.trim() !== '' && (
        <div className="animate-in fade-in">
          <Button type="primary" className="w-full">
            🚀 Start Ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
