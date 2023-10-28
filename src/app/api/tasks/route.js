import { prisma } from "@/db/config"
import { NextResponse } from "next/server"

export const GET = async (req) => {

  try {
    const bitacora = await prisma.tasks.findMany();

    return NextResponse.json(bitacora);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }
}

export const POST = async (req) => {

  try {
    const {oes, oes2, turno, turno2, fecha, actividades, actividades2} = await req.json();

    const createBitacora = await prisma.tasks.create({
      data: {
        oes,
        oes2,
        turno,
        turno2,
        fecha,
        actividades,
        actividades2,
      }
    });

    return NextResponse.json(createBitacora);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }
}