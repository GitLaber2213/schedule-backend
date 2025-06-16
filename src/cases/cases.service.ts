import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';
import { PrismaService } from 'src/prisma.service';


const lootStandartCase = [
  { caseId: 1, image: 'ssss', skinName: 'Скин1', dropChance: 0.8, type: 'SHLOK' },
  { caseId: 1, image: 'ssss', skinName: 'Скин2', dropChance: 0.8, type: 'SHLOK' },
  { caseId: 1, image: 'ssss', skinName: 'Скин3', dropChance: 0.6, type: 'INDUSTRIAL' },
  { caseId: 1, image: 'ssss', skinName: 'Скин4', dropChance: 0.6, type: 'INDUSTRIAL' },
  { caseId: 1, image: 'ssss', skinName: 'Скин5', dropChance: 0.4, type: 'SECRETIVE' },
  { caseId: 1, image: 'ssss', skinName: 'Скин6', dropChance: 0.2, type: 'MYSTERY' },
  { caseId: 1, image: 'ssss', skinName: 'Скин7', dropChance: 0.2, type: 'MYSTERY' },
  { caseId: 1, image: 'ssss', skinName: 'Скин8', dropChance: 0.1, type: 'SOUVENIR' },
  { caseId: 1, image: 'ssss', skinName: 'Скин9', dropChance: 0.1, type: 'SOUVENIR' },
]

type Loot = {
  caseId: number;
  image: string;
  skinName: string;
  dropChance: number;
  type: string;
}

@Injectable()
export class CasesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCaseDto: CreateCaseDto) {
    return this.prisma.loot.createMany({ data: lootStandartCase });
  }

  async findAll() {
    return await this.prisma.cases.findMany();
  }

  async generateLootArray(): Promise<{ lootArray: Loot[]; winningIndex: number }> {
    const lootItems = await this.prisma.loot.findMany({ where: { caseId: 1 } });
    const lootArray: Loot[] = [];
    let winningIndex: number = -1;

    lootItems.forEach(item => lootArray.push(item));


    while (lootArray.length < 75) {
      const randomIndex = Math.floor(Math.random() * lootItems.length);
      lootArray.push(lootItems[randomIndex]);
    }

    this.shuffleArray(lootArray);

    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < lootItems.length; i++) {
      cumulativeProbability += lootItems[i].dropChance;

      if (randomValue < cumulativeProbability) {
        winningIndex = Math.floor(Math.random() * (75 - 50)) + 50;
        break;
      }
    }

    return { lootArray, winningIndex };
  }

  private shuffleArray(array: Loot[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  async findOne(id: number) {
    return await this.prisma.cases.findUnique({
      where: { id },
      include: {
        loot: true,
      },
    });
  }
}
