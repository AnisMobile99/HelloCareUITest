export type SearchBarProps = {
  specialties: string[];
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  location: string;
  price: number;
  schedule: string[];
};
