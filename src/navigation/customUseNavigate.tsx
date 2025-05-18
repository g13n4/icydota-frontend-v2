import { useNavigate } from 'react-router';

function customUseNavigate({
    
}) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/profile')}>
      Go to Profile
    </button>
  );
}