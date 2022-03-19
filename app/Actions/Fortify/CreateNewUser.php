<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:25'],
            'password' => $this->passwordRules(),
        ], $message = [
            'name.required' => 'يجب ادخال اسم المستخدم',
            'name.string' => 'اسم المستخدم غير صالح',
            'name.max' => 'اسم المستخدم يجب ان لا يزيد عن 25 حرف',
            'password.required' => 'يجب ادخال كلمة المرور',
            'password.confirmed' => 'كلمة المرور غير متطابقة',
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
