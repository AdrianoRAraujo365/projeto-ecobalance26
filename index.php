<?php
// Configurações de conexão (Exemplo para PostgreSQL conforme seu arquivo de origem)
$mensagem = "";
$tipoMensagem = "";

// Simulação de processamento de formulário
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = trim($_POST["nome"] ?? "");
    $email = trim($_POST["email"] ?? "");

    if ($nome === "" || $email === "") {
        $mensagem = "Por favor, preencha todos os campos.";
        $tipoMensagem = "erro";
    } else {
        // Aqui entraria a lógica de INSERT no banco de dados[cite: 4]
        $mensagem = "Obrigado, $nome! Seu interesse em Cidades Inteligentes foi registrado.";
        $tipoMensagem = "sucesso";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cidades Inteligentes - Alto de Pinheiros</title>
    <!-- Bootstrap e FontAwesome via CDN[cite: 1] -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <style>
        /* Estilos baseados no seu projeto[cite: 1, 4, 5] */
        body {
            background-color: #1a1a1a;
            color: white;
            font-family: Arial, sans-serif;
        }
        .navbar { background: rgba(0,0,0,0.8); }
        .hero-section { padding: 100px 0; text-align: center; }
        .form-container {
            background: #2d2d2d;
            padding: 30px;
            border-radius: 10px;
            margin-top: 50px;
        }
        .mensagem { padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .sucesso { background: #d1e7dd; color: #0f5132; }
        .erro { background: #f8d7da; color: #842029; }
    </style>
</head>
<body>

    <!-- Navegação[cite: 1] -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fas fa-city me-2"></i>Smart City Alto de Pinheiros</a>
        </div>
    </nav>

    <div class="container mt-5 pt-5">
        <div class="hero-section">
            <h1 class="display-4"><i class="fas fa-microchip"></i> Cidades Inteligentes</h1>
            <p class="lead">Inovação e Sustentabilidade no Alto de Pinheiros[cite: 3].</p>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-6 form-container">
                <h3>Receba novidades do projeto</h3>
                
                <!-- Exibição de Feedback PHP[cite: 4] -->
                <?php if ($mensagem): ?>
                    <div class="mensagem <?php echo $tipoMensagem; ?>">
                        <?php echo htmlspecialchars($mensagem); ?>
                    </div>
                <?php endif; ?>

                <!-- Formulário de Cadastro[cite: 4, 5] -->
                <form method="POST" action="">
                    <div class="mb-3">
                        <label class="form-label">Nome Completo:</label>
                        <input type="text" name="nome" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">E-mail Acadêmico/Profissional:</label>
                        <input type="email" name="email" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Cadastrar Interesse</button>
                </form>
            </div>
        </div>

        <!-- Exemplo de Tabela de Conteúdo[cite: 3, 5] -->
        <div class="mt-5">
            <h2 class="text-center">Eixos de Infraestrutura[cite: 3]</h2>
            <table class="table table-dark table-hover mt-3">
                <thead>
                    <tr>
                        <th>Eixo</th>
                        <th>Descrição</th>
                        <th>Impacto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Energia</td>
                        <td>Smart Grids e Fontes Renováveis</td>
                        <td>Eficiência energética[cite: 3]</td>
                    </tr>
                    <tr>
                        <td>Saneamento</td>
                        <td>Cidades Esponja e Gestão de Água</td>
                        <td>Redução de enchentes[cite: 3]</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <footer class="text-center py-4 mt-5 border-top border-secondary">
        <p>&copy; 2026 - Cidades Inteligentes - FATEC[cite: 1].</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
