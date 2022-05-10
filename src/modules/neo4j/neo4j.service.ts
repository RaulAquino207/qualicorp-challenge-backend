import neo4j, { Result, Transaction } from 'neo4j-driver'
import { Inject, Injectable } from '@nestjs/common';
import { Driver } from 'neo4j-driver';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './constants/neo4j.constants';
import { Neo4jConfig } from './interfaces/neo4j-config.interface';

@Injectable()
export class Neo4jService {
    constructor(
        @Inject(NEO4J_CONFIG)
        private readonly config: Neo4jConfig,
        @Inject(NEO4J_DRIVER) 
        private readonly driver: Driver
    ){}

    getConfig(): Neo4jConfig {
        return this.config;
    }

    getDriver(): Driver {
        return this.driver;
    }

    getReadSession(database?: string) {
        return this.driver.session({
            database: database || this.config.database,
            defaultAccessMode: neo4j.session.READ,
        })
    }

    getWriteSession(database?: string) {
        return this.driver.session({
            database: database || this.config.database,
            defaultAccessMode: neo4j.session.WRITE,
        })
    }

    read(cypher: string, params?: Record<string, any>, databaseOrTransaction?: string | Transaction): Result {
        // if ( databaseOrTransaction instanceof TransactionImpl ) {
        //     return (<Transaction> databaseOrTransaction).run(cypher, params)
        // }

        const session = this.getReadSession(<string> databaseOrTransaction)
        return session.run(cypher, params)
    }

    write(cypher: string, params?: Record<string, any>,  databaseOrTransaction?: string | Transaction): Result {
        // if ( databaseOrTransaction instanceof TransactionImpl ) {
        //     return (<Transaction> databaseOrTransaction).run(cypher, params)
        // }

        const session = this.getWriteSession(<string> databaseOrTransaction)
        return session.run(cypher, params)
    }
}
