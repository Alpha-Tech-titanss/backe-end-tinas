import { readFileSync } from 'fs';
import { join } from 'path';
import * as EasyGraphQLLoadTester from 'easygraphql-load-tester'

const QueryTest = () => {
    const schema = readFileSync(join(__dirname,  'schema.gql'), 'utf8');
    const easyGraphQLLoadTester = new EasyGraphQLLoadTester(schema);

    //easyGraphQLLoadTester.k6('k6.js');
    // or use
    easyGraphQLLoadTester.k6('k6.js',{
        vus: 1000,
        duration: '10s',
        selectedQueries: ['commerces',],
    });
}
QueryTest()


