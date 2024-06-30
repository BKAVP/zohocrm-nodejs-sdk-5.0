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
import { Form } from "./Form";
import { FormCountArgs } from "./FormCountArgs";
import { FormFindManyArgs } from "./FormFindManyArgs";
import { FormFindUniqueArgs } from "./FormFindUniqueArgs";
import { CreateFormArgs } from "./CreateFormArgs";
import { UpdateFormArgs } from "./UpdateFormArgs";
import { DeleteFormArgs } from "./DeleteFormArgs";
import { Organization } from "../../organization/base/Organization";
import { State } from "../../state/base/State";
import { FormService } from "../form.service";
@graphql.Resolver(() => Form)
export class FormResolverBase {
  constructor(protected readonly service: FormService) {}

  async _formsMeta(
    @graphql.Args() args: FormCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Form])
  async forms(@graphql.Args() args: FormFindManyArgs): Promise<Form[]> {
    return this.service.forms(args);
  }

  @graphql.Query(() => Form, { nullable: true })
  async form(@graphql.Args() args: FormFindUniqueArgs): Promise<Form | null> {
    const result = await this.service.form(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Form)
  async createForm(@graphql.Args() args: CreateFormArgs): Promise<Form> {
    return await this.service.createForm({
      ...args,
      data: {
        ...args.data,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,

        state: args.data.state
          ? {
              connect: args.data.state,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Form)
  async updateForm(@graphql.Args() args: UpdateFormArgs): Promise<Form | null> {
    try {
      return await this.service.updateForm({
        ...args,
        data: {
          ...args.data,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,

          state: args.data.state
            ? {
                connect: args.data.state,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Form)
  async deleteForm(@graphql.Args() args: DeleteFormArgs): Promise<Form | null> {
    try {
      return await this.service.deleteForm(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Organization, {
    nullable: true,
    name: "organization",
  })
  async getOrganization(
    @graphql.Parent() parent: Form
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => State, {
    nullable: true,
    name: "state",
  })
  async getState(@graphql.Parent() parent: Form): Promise<State | null> {
    const result = await this.service.getState(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
