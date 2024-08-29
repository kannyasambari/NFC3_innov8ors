import { useParams } from 'react-router-dom';

function PetDetailPage() {
  const { id } = useParams();

  return (
    <div>
      {/* Fetch and display pet details using the `id` */}
    </div>
  );
}

export default PetDetailPage;
