import { Doctor } from "~/types/database";

export const doctorsBySpecialty: Record<string, Doctor[]> = {
  psychologue: [
    {
      id: 0,
      name: "Mme Angela ROQUI",
      specialty: "Psychologue, Psychothérapeute",
      location: "83700 - Saint Raphaël",
      price: 60,
      schedule: [
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
    {
      id: 1,
      name: "Dr Jean Dupont",
      specialty: "Psychiatre",
      location: "75001 - Paris",
      price: 60,
      schedule: [
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
    {
      id: 2,
      name: "Dr Anis SALAH BEY",
      specialty: "Psychiatre",
      location: "75001 - Paris",
      price: 60,
      schedule: [
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
    {
      id: 3,
      name: "Dr Joe",
      specialty: "Psychiatre",
      location: "75001 - Paris",
      price: 60,
      schedule: [
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
  ],
};
