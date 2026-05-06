# Utiliza a imagem oficial do PHP 8.2 CLI (conforme seu arquivo .txt)
FROM php:8.2-cli

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala dependências do sistema e extensões para PostgreSQL (conforme seu novo docker.txt)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pgsql pdo_pgsql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copia todos os arquivos do projeto para o container
COPY . /app

# Expõe a porta 10000 (comum em serviços como Render)
EXPOSE 10000

# Comando para iniciar o servidor embutido do PHP usando a variável de porta do ambiente
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-10000} -t /app"]
