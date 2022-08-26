<?php

namespace Database\Seeders;

use App\Models\Module;
use Illuminate\Database\Seeder;

class BaseModulesSeeder extends Seeder
{
    public function run()
    {
        Module::create([
            'name' => 'Base Public',
            'description' => 'Null',
            'image' => 'Null',
            'fields' => [
                'application_number' => [
                    'type' => 'text',
                    'label' => 'Enter application number: ',
                    'default' => 'asdas da',
                    'red_text' => '(IT IS COMPULSORY)'
                ]
            ],
            'rules' => ['application_number' => ['required' => true]],
            'css' => [],
            'classes' => [
                'application_number' =>  [
                    'outer_div' => 'w-full md:w-full px-3 mb-3',
                    'label' => 'block mb-1 text-sm font-bold text-black',
                    'field' => 'appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none',
                    'red_text' => 'text-red-600'
                ]
            ]
            ,
            'for_institute' => false,
            'is_hidden' => true,
            'added_by' => 1,
        ]);

        Module::create([
            'name' => 'Base Institute',
            'description' => 'Null',
            'image' => 'Null',
            'fields' => ['application_number' => ['type' => 'text', 'label' => 'Enter application number: ',
                'default' => 'ggg', 'placeholder' => 'FAXFASD']],
            'rules' => ['application_number' => ['required' => true]],
            'css' => [],
            'classes' => [
                'application_number' =>  [
                    'outer_div' => 'w-full md:w-full px-3 mb-3',
                    'label' => 'block mb-1 text-sm font-bold text-black',
                    'field' => 'appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none',
                    'red_text' => 'text-red-600'
                ]
            ],
            'for_institute' => true,
            'is_hidden' => true,
            'added_by' => 1,
        ]);
    }
}
