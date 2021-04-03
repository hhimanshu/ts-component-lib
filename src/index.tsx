import React from 'react';

type HelloType = {
    person: string;
}

export default ({ person }: HelloType) => <div>Hello {person}</div>