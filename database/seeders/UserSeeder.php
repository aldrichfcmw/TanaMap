<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Permission::updateOrCreate(['name' => 'admin'],['name' => 'admin']);
        // $role1 = Role::updateOrCreate(['name' => 'admin'],['name' => 'admin']);
        // $role1 ->givePermissionTo('admin');
        // $user = User::create([
        //     'name'      => 'admin',
        //     'username'  => 'admin',
        //     'email'     => 'admin@gmail.com',
        //     'password'  => Hash::make('admin123'),
        // ]);
        // $user -> assignRole($role1);
        
        // Permission::updateOrCreate(['name' => 'guest'],['name' => 'guest']);
        // $role2 = Role::updateOrCreate(['name' => 'guest'],['name' => 'guest']);
        // $role2 ->givePermissionTo('farmer');
        // $user = User::create([
        //     'name'      => 'farmer',
        //     'username'  => 'farmer',
        //     'email'     => 'farmer@gmail.com',
        //     'password'  => Hash::make('farmer123'),
        // ]);
        // $user -> assignRole($role2);

        // Permission::updateOrCreate(['name' => 'view weather'],['name' => 'view weather']);
        // $role3 = Role::updateOrCreate(['name' => 'farmer weather'],['name' => 'farmer weather']);
        // $role3 ->givePermissionTo('farmer');
        // $user = User::create([
        //     'name'      => 'mefita',
        //     'username'  => 'mefita',
        //     'email'     => 'mefita@gmail.com',
        //     'password'  => Hash::make('mefita123'),
        // ]);
        // $user -> assignRole($role3);
    }
}
