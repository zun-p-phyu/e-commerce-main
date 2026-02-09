import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { CartItem } from '@/types';

const ORDERS_PATH = path.join(process.cwd(), 'data', 'orders.json');

interface OrderRecord {
  id: number;
  email: string;
  name: string;
  address: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, address, items } = body as {
      email?: string;
      name?: string;
      address?: string;
      items?: CartItem[];
    };
    if (!email || !name || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Email, name and cart items are required' },
        { status: 400 }
      );
    }
    const total = items.reduce((sum: number, i: CartItem) => sum + i.price * i.quantity, 0);
    const data = await fs.readFile(ORDERS_PATH, 'utf-8');
    const orders: OrderRecord[] = JSON.parse(data);
    const maxId = orders.length === 0 ? 0 : Math.max(...orders.map((o) => o.id));
    const newId = maxId + 1;
    const order: OrderRecord = {
      id: newId,
      email: (email as string).trim().toLowerCase(),
      name: (name as string).trim(),
      address: (address as string)?.trim() || '',
      items,
      total,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    await fs.writeFile(ORDERS_PATH, JSON.stringify(orders, null, 2));
    return NextResponse.json({ orderId: order.id });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to place order' }, { status: 500 });
  }
}
