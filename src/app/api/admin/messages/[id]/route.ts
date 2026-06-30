import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const body = await req.json();

        if (typeof body.contacted !== "boolean") {
            return NextResponse.json({ error: "Invalid contacted value" }, { status: 400 });
        }

        const messageId = parseInt(id, 10);
        if (Number.isNaN(messageId)) {
            return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
        }

        const updatedMessage = await prisma.contact.update({
            where: { id: messageId },
            data: { contacted: body.contacted },
        });

        return NextResponse.json(updatedMessage);
    } catch (error) {
        console.error('Error updating message:', error);
        return NextResponse.json(
            { error: 'Failed to update message' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;

        const messageId = parseInt(id, 10);
        if (Number.isNaN(messageId)) {
            return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
        }

        await prisma.contact.delete({
            where: { id: messageId },
        });

        return NextResponse.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        return NextResponse.json(
            { error: 'Failed to delete message' },
            { status: 500 }
        );
    }
}
