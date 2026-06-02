export interface BookingFormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Booking Details
  serviceId: string;
  date: string;
  time: string;
  barber: string;
  notes?: string;
  
  // Payment
  paymentMethod: "card" | "cash";
  
  // Card Details (if card)
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

export interface BookingConfirmation {
  id: string;
  status: "confirmed" | "pending";
  service: string;
  date: string;
  time: string;
  barber: string;
  customerName: string;
  email: string;
  paymentMethod: string;
  total: number;
}
