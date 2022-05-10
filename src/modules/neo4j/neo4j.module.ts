import { DynamicModule, Module } from '@nestjs/common';
import { createDriver } from '../../utils/neo4j.util';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './constants/neo4j.constants';
import { Neo4jConfig } from './interfaces/neo4j-config.interface';
import { Neo4jService } from './neo4j.service';

@Module({})
export class Neo4jModule {
  static forRoot(config: Neo4jConfig) : DynamicModule {
    return {
      module: Neo4jModule,
      providers: [
        Neo4jService,
        {
          provide: NEO4J_CONFIG,
          useValue: config
        },
        {
          provide: NEO4J_DRIVER,
          inject: [ NEO4J_CONFIG ],
          useFactory: async () => {
            return createDriver(config)
          }
        }
      ], 
      exports: [
        Neo4jService
      ]
    }
  }
}
