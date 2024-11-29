import React, { useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { GraduationCap } from 'lucide-react';

type AuthMode = 'signin' | 'signup' | 'forgot-password';

export function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('signin');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <GraduationCap className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to UniBoard
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === 'signin' && "Sign in to access the university notice board"}
          {mode === 'signup' && "Create your account to get started"}
          {mode === 'forgot-password' && "Reset your password"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {mode === 'signin' && (
            <>
              <SignInForm />
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  onClick={() => setMode('forgot-password')}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </button>
                <div className="text-sm">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </>
          )}

          {mode === 'signup' && (
            <>
              <SignUpForm />
              <div className="mt-6 text-center text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </button>
              </div>
            </>
          )}

          {mode === 'forgot-password' && (
            <>
              <ForgotPasswordForm />
              <div className="mt-6 text-center text-sm">
                <button
                  onClick={() => setMode('signin')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Back to sign in
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}