import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Report } from './entities/report.entity';
import { ReportService } from './report.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Report)
export class ReportResolver {
  constructor(private readonly reportService: ReportService) {}

  //@Roles(Role.admin,Role.client,Role.store)
  @Mutation(() => Report)
  createReport(@Args('createReportInput') createReportInput: CreateReportInput, @CurrentUser() user) {
    return this.reportService.create({...createReportInput, reporter: user.id  } as CreateReportInput);
  }

  //@Public()
  @Query(() => [Report], { name: 'reports' })
  findAll() {
    return this.reportService.findAll();
  }

  @Query(() => Report, { name: 'report' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.reportService.findOne(id);
  }

  @Mutation(() => Report)
  updateReport(@Args('updateReportInput') updateReportInput: UpdateReportInput) {
    return this.reportService.update(updateReportInput.id, updateReportInput);
  }

  @Mutation(() => Report)
  removeReport(@Args('id', { type: () => String }) id: string) {
    return this.reportService.remove(id);
  }
}
