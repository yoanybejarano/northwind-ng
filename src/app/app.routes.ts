import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ShippersComponent } from './components/shippers/shippers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'shippers', component: ShippersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'orders-details', component: OrderDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
