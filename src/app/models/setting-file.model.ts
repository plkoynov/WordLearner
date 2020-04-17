import { SettingFileItem } from './setting-file-item.model';

export class SettingFile {
	title: string;
	allowPositionChange: boolean;
	items: SettingFileItem[];
}
