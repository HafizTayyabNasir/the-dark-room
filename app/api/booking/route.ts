import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ["firstName", "lastName", "email", "phone", "serviceId", "date", "time"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate booking ID
    const bookingId = `TDR${Date.now().toString(36).toUpperCase().slice(-6)}`;

    // In production: save to database, send confirmation email, etc.
    const booking = {
      id: bookingId,
      status: "confirmed",
      service: body.serviceName || body.serviceId,
      date: body.date,
      time: body.time,
      barber: body.barber || "any",
      customerName: `${body.firstName} ${body.lastName}`,
      email: body.email,
      phone: body.phone,
      paymentMethod: body.paymentMethod,
      total: body.total,
      notes: body.notes || "",
      createdAt: new Date().toISOString(),
    };

    console.log("New booking:", booking);

    return NextResponse.json({
      success: true,
      bookingId,
      booking,
      message: "Booking confirmed successfully",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "The Dark Room Booking API" });
}
