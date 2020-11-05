export default function mapRespondeData(sourceArray: string[]): string[][] {
  return sourceArray.map((item) => {
    const [name, code] = item.split(' (');
    return [name, code.replace(')', '')];
  });
}
