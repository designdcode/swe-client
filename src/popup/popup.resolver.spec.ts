import { Test, TestingModule } from '@nestjs/testing';
import { PopupResolver } from './popup.resolver';
import { PopupService } from './popup.service';

describe('PopupResolver', () => {
  let resolver: PopupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopupResolver, PopupService],
    }).compile();

    resolver = module.get<PopupResolver>(PopupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
