import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            Auth Layout Is Special Only For Auth Route Or Nested Routes Inside
            The Auth Directory.
            {children}
        </div>
    );
};

export default AuthLayout;
