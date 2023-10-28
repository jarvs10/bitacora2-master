import { prisma } from "@/db/config"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {

  try {

    const id = params.id;

    const getTask = await prisma.tasks.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    return NextResponse.json(getTask);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }
}

export const DELETE = async (req, { params }) => {

  try {

    const id = params.id;

    const deleteTask = await prisma.tasks.delete({
      where: {
        id: parseInt(id)
      }
    });

    return NextResponse.json(deleteTask);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }
}

export const PUT = async (req, { params }) => {

  try {

    const { oes, oes2, turno, turno2, fecha, actividades, actividades2 } = await req.json();

    const id = params.id;

    const editTask = await prisma.tasks.update({
      where: {
        id: parseInt(id)
      },
      data: {
        oes,
        oes2,
        turno,
        turno2,
        fecha,
        actividades,
        actividades2,
      }
    })

    return NextResponse.json(editTask);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404
    });
  }
}