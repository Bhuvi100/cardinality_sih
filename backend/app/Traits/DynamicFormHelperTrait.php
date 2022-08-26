<?php
namespace App\Traits;

trait DynamicFormHelperTrait
{
    public static array $fields = [
        'text',
        'numeric',
        'textarea',
        'radio',
        'checkbox',
        'select',
        'file'
    ];

    public static array $fields_require_options = [
        'radio',
        'checkbox',
        'select'
    ];

    public function getField(string $name) {
        return $this->fields[$name];
    }

    public static function getDefaultClasses(string $field_type) {
        return [
            'text' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-1 text-sm font-bold text-black',
                'field' => 'appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none',
                'red_text' => 'text-red-600'
            ],
            'numeric' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-1 text-sm font-bold text-black',
                'field' => 'appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none',
                'red_text' => 'text-red-600'
            ],
            'textarea' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-2 text-sm font-bold text-black',
                'field' => 'block p-2.5 w-full text-sm text-gray-500 rounded-lg border border-black focus:ring-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-600 focus:outline-none',
                'red_text' => 'text-red-600'
            ],
            'radio' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-2 text-sm font-bold text-black',
                'options_outer_div' => 'grid grid-cols-3 ml-3',
                'option_div' => 'form-check form-check-inline flex flex-row',
                'field' => 'form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer',
                'option_label' => 'form-check-label inline-block text-gray-800',
                'red_text' => 'text-red-600'
            ],
            'checkbox' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-2 text-sm font-bold text-black',
                'options_outer_div' => 'grid grid-cols-3 ml-3',
                'option_div' => 'form-check form-check-inline flex flex-row',
                'field' => 'form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer',
                'option_label' => 'form-check-label inline-block text-gray-800',
                'red_text' => 'text-red-600'
            ],
            'select' => [
                'outer_div' => 'w-full md:w-full mt-3 px-3 mb-6',
                'label' => 'block mb-2 text-sm font-bold text-black',
                'field' => 'text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black',
                'options' => '',
                'red_text' => 'text-red-600'
            ],
            'file' => [
                'outer_div' => 'w-full md:w-full px-3 mb-3',
                'label' => 'block mb-2 text-sm font-medium text-black',
                'field' => 'block mb-5 w-full text-xs text-gray-900 rounded-lg border border-blue-800 cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400',
                'red_text' => 'text-red-600'
            ],
        ][$field_type];
    }

    public function getDefaultRules(string $field_name) {
        $field = $this->getField($field_name);

        $rules = [
            'text' => ['string' => true],
            'numeric' => ['numeric' => true],
            'textarea' => ['string' => true],
            'radio' => ['in' => implode(',', $field['options'] ?? [])],
            'checkbox' => ['array' => true, 'in' => implode(',', $field['options'] ?? [])],
            'select' => ['in' => implode(',', $field['options'] ?? [])],
            'file' => ['file' => true],
        ];

        return $rules[$field['type']];
    }

    public function getAllowedRules(string $field_type)
    {
        return [
            'text' => ['required','nullable','min','max','email'],
            'numeric' => ['required','nullable','min','max'],
            'textarea' => ['required','nullable','min','max'],
            'radio' => ['required','nullable'],
            'checkbox' => ['required','nullable'],
            'select' => ['required','nullable'],
            'file' => ['required','nullable','size','mimes'],
        ][$field_type];
    }

}
