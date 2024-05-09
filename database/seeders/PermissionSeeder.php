<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // create permissions
        Permission::updateOrCreate(['name' => 'admin'],['name' => 'admin']);
        Permission::updateOrCreate(['name'=> 'guest'],['name'=> 'guest']);
        Permission::updateOrCreate(['name' => 'view hpt'],['name' => 'view hpt']);
        Permission::updateOrCreate(['name' => 'view growth'],['name' => 'view growth']);
        Permission::updateOrCreate(['name' => 'view tool'],['name' => 'view tool']);
        Permission::updateOrCreate(['name' => 'view weather'],['name' => 'view weather']);

        $role1 = Role::updateOrCreate(['name' => 'admin'],['name' => 'admin']);
        $role1 ->givePermissionTo('admin');
        $role2 = Role::updateOrCreate(['name' => 'guest'],['name' => 'guest']);
        $role2 ->givePermissionTo('farmer');
        $role3 = Role::updateOrCreate(['name' => 'farmer hpt'],['name' => 'farmer hpt']);
        $role3 ->givePermissionTo('view hpt');
        $role4 = Role::updateOrCreate(['name' => 'farmer growth'],['name' => 'farmer growth']);
        $role4 ->givePermissionTo('view growth');
        $role5 = Role::updateOrCreate(['name' => 'farmer tool'],['name' => 'farmer tool']);
        $role5 ->givePermissionTo('view tool');
        $role6 = Role::updateOrCreate(['name' => 'farmer weather'],['name' => 'farmer weather']);
        $role6 ->givePermissionTo('view weather');

    }
}
