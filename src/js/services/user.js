const requestLogin = creds =>
    new Promise((resolve, reject) => {
        const { username, password } = creds;
        if (username === 'robbie' && password === 'password') {
            setTimeout(
                () =>
                    resolve({
                        firstName: 'Robbie',
                        lastName: 'Creaner',
                        avatar:
                            'https://robohash.org/porrovoluptatemharum.jpg?size=50x50&set=set1',
                    }),
                2000
            );
        } else if (username === 'axiom' && password === 'zen') {
            setTimeout(
                () =>
                    resolve({
                        firstName: 'Axiom',
                        lastName: 'Zen',
                        avatar:
                            'https://robohash.org/eumeiustotam.jpg?size=50x50&set=set1',
                    }),
                2000
            );
        } else {
            setTimeout(() => reject('Invalid username or password'), 2000);
        }
    });

export default requestLogin;
