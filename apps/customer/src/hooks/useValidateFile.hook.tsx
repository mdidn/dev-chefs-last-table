export interface IValidateFileParams {
	mime?: string;
	size?: number;
	file?: File | null;
}

export const useValidateFile = () => {
	const validateFile = ({ size = 1, file, mime }: IValidateFileParams) => {
		if (!file) {
			throw new Error("Geen bestand gedetecteerd");
		}
		const fileSize = (file.size / 1024 / 1024).toFixed(2);

		if (parseFloat(fileSize) > size) {
			throw new Error(
				`${file.name} is te groot. De bestandsgrootte moet minder zijn dan ${size}MB`,
			);
		}
		if (!mime?.split(",").includes(file.type)) {
			throw new Error(
				`${file.name} mime type is ongeldig. Het type zou ${mime?.replaceAll(
					",",
					" ",
				)} moeten zijn`,
			);
		}
	};

	return { validateFile };
};
