import './Location.css';

interface LocationProps {
  name: string;
}

function Location({ name }: LocationProps) {
  return <div className="location">{name}</div>;
}

export default Location;
