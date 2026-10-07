// Único lugar para editar links e a data da eleição.
export const SITE = {
    // Links de convite dos grupos: WhatsApp > Info. do grupo > Convidar via link.
    // Enquanto estiverem vazios, os botões levam à seção #grupo com aviso.
    grupos: {
        // Fase 1: ideias e enquetes, aberto a todos.
        comunidade: 'https://chat.whatsapp.com/BzrgC1Rys9gBSxzbYyLSYO',
        // Especificação e desenvolvimento.
        desenvolvimento: 'https://chat.whatsapp.com/CE4y7F8SPNgAp3iFGAbabt',
    },
    // Enquete de ideias (Google Forms). Vazio: o botão leva à seção #grupo.
    enquete: 'https://forms.gle/LNxqwJv8DNbgCWgB8',
    // Repositório do projeto (opcional; vazio esconde o link).
    github: '',
    // 25/10/2026, 08:00 em Brasília (UTC-3), abertura das urnas.
    eleicao: '2026-10-25T08:00:00-03:00',
    // Domínio definido no CNAME.
    url: 'https://programadorespelademocracia.org/',
};
