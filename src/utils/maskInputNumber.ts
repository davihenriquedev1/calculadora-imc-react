export const maskInputNumber = (value: string): string => {
    // Remove todos os caracteres que não sejam números, vírgulas ou pontos
    let maskedValue = value.replace(/[^0-9.,]/g, "");

    // Substitui múltiplos pontos ou vírgulas consecutivos por apenas um
    maskedValue = maskedValue.replace(/[.,]{2,}/g, "");

    // Garante que apenas o último separador decimal (vírgula ou ponto) será mantido
    const lastSeparatorIndex = Math.max(maskedValue.lastIndexOf('.'), maskedValue.lastIndexOf(','));
    if (lastSeparatorIndex !== -1) {
        maskedValue =
            maskedValue.slice(0, lastSeparatorIndex).replace(/[.,]/g, "") + // Remove outros separadores antes do último
            maskedValue.slice(lastSeparatorIndex); // Mantém o último separador decimal
    }

    return maskedValue;
};