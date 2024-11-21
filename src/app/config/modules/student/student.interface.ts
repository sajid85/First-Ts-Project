export type guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type localGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

import { Schema, model, connect } from 'mongoose';

export type Student = {
  id: string;
  name: UserName;
  age: number;
  gender: 'male' | 'female';
  dateOfBirth?: Date;

  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: guardian;
  localgurdian: localGurdian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
