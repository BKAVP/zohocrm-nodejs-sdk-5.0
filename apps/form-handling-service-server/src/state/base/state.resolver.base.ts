/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { State } from "./State";
import { StateCountArgs } from "./StateCountArgs";
import { StateFindManyArgs } from "./StateFindManyArgs";
import { StateFindUniqueArgs } from "./StateFindUniqueArgs";
import { CreateStateArgs } from "./CreateStateArgs";
import { UpdateStateArgs } from "./UpdateStateArgs";
import { DeleteStateArgs } from "./DeleteStateArgs";
import { FormFindManyArgs } from "../../form/base/FormFindManyArgs";
import { Form } from "../../form/base/Form";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { StateService } from "../state.service";
@graphql.Resolver(() => State)
export class StateResolverBase {
  constructor(protected readonly service: StateService) {}

  async _statesMeta(
    @graphql.Args() args: StateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [State])
  async states(@graphql.Args() args: StateFindManyArgs): Promise<State[]> {
    return this.service.states(args);
  }

  @graphql.Query(() => State, { nullable: true })
  async state(
    @graphql.Args() args: StateFindUniqueArgs
  ): Promise<State | null> {
    const result = await this.service.state(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => State)
  async createState(@graphql.Args() args: CreateStateArgs): Promise<State> {
    return await this.service.createState({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => State)
  async updateState(
    @graphql.Args() args: UpdateStateArgs
  ): Promise<State | null> {
    try {
      return await this.service.updateState({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => State)
  async deleteState(
    @graphql.Args() args: DeleteStateArgs
  ): Promise<State | null> {
    try {
      return await this.service.deleteState(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Form], { name: "forms" })
  async findForms(
    @graphql.Parent() parent: State,
    @graphql.Args() args: FormFindManyArgs
  ): Promise<Form[]> {
    const results = await this.service.findForms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Organization], { name: "organizations" })
  async findOrganizations(
    @graphql.Parent() parent: State,
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    const results = await this.service.findOrganizations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
