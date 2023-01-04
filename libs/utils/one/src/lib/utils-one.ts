import { utilsTwo } from '@imported-libs/utils/two';

export function utilsOne(): string {
  return 'utils-one' + utilsTwo();
}
