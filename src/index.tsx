import React from 'react';

type HelloType = {
    person: string;
}

export default ({ person }: HelloType) => <h1>Hello {person}</h1>